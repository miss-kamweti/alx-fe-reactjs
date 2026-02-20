import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders todo list component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the component renders
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    // Get initial todo count
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Get input and button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Add new todo
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);
    
    // Check if new todo appears
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    
    // Check if todo count increased
    const updatedTodos = screen.getAllByRole('listitem');
    expect(updatedTodos.length).toBe(initialCount + 1);
    
    // Check if input is cleared
    expect(input.value).toBe('');
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    // Get initial todo count
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Get input and button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Check if todo count remained the same
    const updatedTodos = screen.getAllByRole('listitem');
    expect(updatedTodos.length).toBe(initialCount);
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    // Find the first todo checkbox (Learn React - initially not completed)
    const firstTodoCheckbox = screen.getByTestId('todo-checkbox-1');
    const firstTodoText = screen.getByTestId('todo-text-1');
    
    // Initially not completed
    expect(firstTodoCheckbox).not.toBeChecked();
    expect(firstTodoText).not.toHaveClass('completed');
    
    // Click to toggle
    fireEvent.click(firstTodoCheckbox);
    
    // Should now be completed
    expect(firstTodoCheckbox).toBeChecked();
    expect(firstTodoText).toHaveClass('completed');
    
    // Click again to toggle back
    fireEvent.click(firstTodoCheckbox);
    
    // Should not be completed again
    expect(firstTodoCheckbox).not.toBeChecked();
    expect(firstTodoText).not.toHaveClass('completed');
  });

  test('toggles todo by clicking on text', () => {
    render(<TodoList />);
    
    // Find the first todo text
    const firstTodoText = screen.getByTestId('todo-text-1');
    const firstTodoCheckbox = screen.getByTestId('todo-checkbox-1');
    
    // Initially not completed
    expect(firstTodoCheckbox).not.toBeChecked();
    
    // Click on text to toggle
    fireEvent.click(firstTodoText);
    
    // Should now be completed
    expect(firstTodoCheckbox).toBeChecked();
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    // Get initial todo count
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Find delete button for first todo
    const deleteButton = screen.getByTestId('delete-button-1');
    
    // Click delete
    fireEvent.click(deleteButton);
    
    // Check if todo count decreased
    const updatedTodos = screen.getAllByRole('listitem');
    expect(updatedTodos.length).toBe(initialCount - 1);
    
    // Check if the deleted todo is gone
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('displays correct todo statistics', () => {
    render(<TodoList />);
    
    // Check statistics
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    
    // Add a new todo
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    // Check updated statistics
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Pending: 3')).toBeInTheDocument();
    
    // Toggle a todo
    const todoCheckbox = screen.getByTestId('todo-checkbox-2');
    fireEvent.click(todoCheckbox);
    
    // Check updated statistics
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
  });

  test('can add multiple todos', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Add first todo
    fireEvent.change(input, { target: { value: 'First Todo' } });
    fireEvent.click(addButton);
    
    // Add second todo
    fireEvent.change(input, { target: { value: 'Second Todo' } });
    fireEvent.click(addButton);
    
    // Add third todo
    fireEvent.change(input, { target: { value: 'Third Todo' } });
    fireEvent.click(addButton);
    
    // Check if all todos are present
    expect(screen.getByText('First Todo')).toBeInTheDocument();
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
    expect(screen.getByText('Third Todo')).toBeInTheDocument();
    expect(screen.getByText('Total: 6')).toBeInTheDocument(); // 3 initial + 3 new
  });

  test('handles todo list with all todos completed', () => {
    render(<TodoList />);
    
    // Complete all todos
    const todoCheckboxes = screen.getAllByRole('checkbox');
    todoCheckboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        fireEvent.click(checkbox);
      }
    });
    
    // Check statistics
    expect(screen.getByText('Completed: 3')).toBeInTheDocument();
    expect(screen.getByText('Pending: 0')).toBeInTheDocument();
    
    // Check if all todos have completed class
    const todoTexts = screen.getAllByTestId(/todo-text-\d+/);
    todoTexts.forEach(text => {
      expect(text).toHaveClass('completed');
    });
  });

  test('handles todo list with no todos', () => {
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByText('Delete');
    deleteButtons.forEach(button => {
      fireEvent.click(button);
    });
    
    // Check statistics
    expect(screen.getByText('Total: 0')).toBeInTheDocument();
    expect(screen.getByText('Completed: 0')).toBeInTheDocument();
    expect(screen.getByText('Pending: 0')).toBeInTheDocument();
    
    // Check if todo list is empty
    const todoList = screen.getByTestId('todo-list');
    expect(todoList.children.length).toBe(0);
  });

  test('input field updates correctly when typing', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    
    // Type in input
    fireEvent.change(input, { target: { value: 'Test input' } });
    expect(input.value).toBe('Test input');
    
    // Clear input
    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).toBe('');
  });

  test('form submission works with Enter key', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const form = screen.getByRole('form');
    
    // Type and submit with Enter
    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.submit(form);
    
    // Check if todo was added
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
  });

  test('todo items have correct structure', () => {
    render(<TodoList />);
    
    // Get first todo item
    const firstTodo = screen.getByText('Learn React').closest('li');
    
    // Check if it contains checkbox, text, and delete button
    expect(within(firstTodo).getByRole('checkbox')).toBeInTheDocument();
    expect(within(firstTodo).getByText('Learn React')).toBeInTheDocument();
    expect(within(firstTodo).getByText('Delete')).toBeInTheDocument();
  });

  test('delete buttons are properly labeled', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons.length).toBe(3);
    
    deleteButtons.forEach(button => {
      expect(button).toHaveClass('delete-button');
    });
  });

  test('todo items maintain order', () => {
    render(<TodoList />);
    
    // Get all todo texts in order
    const todoItems = screen.getAllByRole('listitem');
    const todoTexts = todoItems.map(item => item.textContent.replace('Delete', '').trim());
    
    // Check order (initial todos should maintain order)
    expect(todoTexts[0]).toBe('Learn React');
    expect(todoTexts[1]).toBe('Build a Todo App');
    expect(todoTexts[2]).toBe('Write tests');
    
    // Add a new todo
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    // Check if new todo appears at the end
    const updatedTodoItems = screen.getAllByRole('listitem');
    const updatedTodoTexts = updatedTodoItems.map(item => item.textContent.replace('Delete', '').trim());
    expect(updatedTodoTexts[updatedTodoTexts.length - 1]).toBe('New Todo');
  });
});