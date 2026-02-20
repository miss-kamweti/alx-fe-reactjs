import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial render
  test('renders todo list component with initial todos', () => {
    render(<TodoList />);
    
    // Check if component renders
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if all initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
    
    // Check if stats are displayed correctly
    expect(screen.getByTestId('total-count')).toHaveTextContent('Total: 4');
    expect(screen.getByTestId('active-count')).toHaveTextContent('Active: 3');
    expect(screen.getByTestId('completed-count')).toHaveTextContent('Completed: 1');
  });

  // Test 2: Adding todos
  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Add new todo
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);
    
    // Check if new todo appears
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    
    // Check if count increased
    const updatedTodos = screen.getAllByRole('listitem');
    expect(updatedTodos.length).toBe(initialCount + 1);
    
    // Check if input is cleared
    expect(input.value).toBe('');
  });

  // Test 3: Toggling todos
  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    const todoCheckbox = screen.getByTestId('todo-checkbox-1');
    const todoText = screen.getByTestId('todo-text-1');
    
    // Initially not completed
    expect(todoCheckbox).not.toBeChecked();
    expect(todoText).not.toHaveClass('completed');
    expect(screen.getByTestId('active-count')).toHaveTextContent('Active: 3');
    
    // Toggle to completed
    fireEvent.click(todoCheckbox);
    expect(todoCheckbox).toBeChecked();
    expect(todoText).toHaveClass('completed');
    expect(screen.getByTestId('active-count')).toHaveTextContent('Active: 2');
    expect(screen.getByTestId('completed-count')).toHaveTextContent('Completed: 2');
    
    // Toggle back to active
    fireEvent.click(todoText); // Toggle by clicking text
    expect(todoCheckbox).not.toBeChecked();
    expect(todoText).not.toHaveClass('completed');
    expect(screen.getByTestId('active-count')).toHaveTextContent('Active: 3');
    expect(screen.getByTestId('completed-count')).toHaveTextContent('Completed: 1');
  });

  // Test 4: Deleting todos
  test('deletes a todo', () => {
    render(<TodoList />);
    
    const deleteButton = screen.getByTestId('delete-button-1');
    const initialCount = screen.getAllByRole('listitem').length;
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(initialCount - 1);
  });

  // Test 5: Filter functionality
  test('filters todos correctly', () => {
    render(<TodoList />);
    
    // Check initial all filter
    expect(screen.getAllByRole('listitem').length).toBe(4);
    
    // Filter active
    fireEvent.click(screen.getByTestId('filter-active'));
    const activeTodos = screen.getAllByRole('listitem');
    expect(activeTodos.length).toBe(3); // 3 active todos
    activeTodos.forEach(todo => {
      const checkbox = within(todo).getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });
    
    // Filter completed
    fireEvent.click(screen.getByTestId('filter-completed'));
    const completedTodos = screen.getAllByRole('listitem');
    expect(completedTodos.length).toBe(1); // 1 completed todo
    completedTodos.forEach(todo => {
      const checkbox = within(todo).getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });
    
    // Back to all
    fireEvent.click(screen.getByTestId('filter-all'));
    expect(screen.getAllByRole('listitem').length).toBe(4);
  });

  // Test 6: Clear completed
  test('clears all completed todos', () => {
    render(<TodoList />);
    
    expect(screen.getByTestId('completed-count')).toHaveTextContent('Completed: 1');
    
    const clearButton = screen.getByTestId('clear-completed');
    fireEvent.click(clearButton);
    
    expect(screen.getByTestId('completed-count')).toHaveTextContent('Completed: 0');
    expect(screen.getByTestId('total-count')).toHaveTextContent('Total: 3');
    expect(screen.queryByText('Write tests')).not.toBeInTheDocument();
  });

  // Test 7: Prevent adding empty todo
  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const initialCount = screen.getAllByRole('listitem').length;
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    expect(screen.getAllByRole('listitem').length).toBe(initialCount);
  });

  // Test 8: Stats update correctly
  test('stats update correctly with todo operations', () => {
    render(<TodoList />);
    
    // Initial stats
    expect(screen.getByTestId('total-count')).toHaveTextContent('Total: 4');
    expect(screen.getByTestId('active-count')).toHaveTextContent('Active: 3');
    expect(screen.getByTestId('completed-count')).toHaveTextContent('Completed: 1');
    
    // Add a new todo
    fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByTestId('add-button'));
    
    expect(screen.getByTestId('total-count')).toHaveTextContent('Total: 5');
    expect(screen.getByTestId('active-count')).toHaveTextContent('Active: 4');
    
    // Toggle a todo
    fireEvent.click(screen.getByTestId('todo-checkbox-2'));
    
    expect(screen.getByTestId('active-count')).toHaveTextContent('Active: 3');
    expect(screen.getByTestId('completed-count')).toHaveTextContent('Completed: 2');
  });

  // Test 9: Delete button works for each todo
  test('each todo has a working delete button', () => {
    render(<TodoList />);
    
    const todos = screen.getAllByRole('listitem');
    todos.forEach((todo, index) => {
      const deleteButton = within(todo).getByText('Delete');
      expect(deleteButton).toBeInTheDocument();
      expect(deleteButton).toHaveClass('delete-button');
    });
  });

  // Test 10: Form submission with Enter key
  test('submits form with Enter key', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const form = screen.getByRole('form');
    
    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.submit(form);
    
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
  });
});