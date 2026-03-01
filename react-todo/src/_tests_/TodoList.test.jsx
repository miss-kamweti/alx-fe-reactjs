import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial render
  test('renders todo list component with all elements', () => {
    render(<TodoList />);
    
    // Check heading
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check input and button
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
    
    // Check todo list container
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    
    // Check stats container
    expect(screen.getByTestId('todo-stats')).toBeInTheDocument();
  });

  // Test 2: Display initial todos
  test('displays initial todos correctly', () => {
    render(<TodoList />);
    
    // Check all initial todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    
    // Check initial stats
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
  });

  // Test 3: Add new todo
  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Add new todo
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);
    
    // Check if new todo appears
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    
    // Check if stats updated
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Pending: 3')).toBeInTheDocument();
    
    // Check if input is cleared
    expect(input.value).toBe('');
  });

  // Test 4: Prevent adding empty todo
  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    const initialTotal = screen.getByText('Total: 3');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Stats should remain the same
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
  });

  // Test 5: Toggle todo completion with checkbox
  test('toggles todo completion status when checkbox is clicked', () => {
    render(<TodoList />);
    
    // Get first todo's checkbox (Learn React - not completed)
    const checkbox = screen.getByTestId('todo-checkbox-1');
    
    // Initially not checked
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    
    // Click to toggle
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen.getByText('Pending: 1')).toBeInTheDocument();
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    
    // Click again to toggle back
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
  });

  // Test 6: Toggle todo by clicking text
  test('toggles todo completion status when text is clicked', () => {
    render(<TodoList />);
    
    const todoText = screen.getByTestId('todo-text-1');
    const checkbox = screen.getByTestId('todo-checkbox-1');
    
    // Click text to toggle
    fireEvent.click(todoText);
    expect(checkbox).toBeChecked();
  });

  // Test 7: Delete todo
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    const deleteButton = screen.getByTestId('delete-button-1');
    const initialTotal = screen.getByText('Total: 3');
    
    // Delete first todo
    fireEvent.click(deleteButton);
    
    // Check if todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Check stats updated
    expect(screen.getByText('Total: 2')).toBeInTheDocument();
    expect(screen.getByText('Pending: 1')).toBeInTheDocument(); // Only Build a Todo App pending
    expect(screen.getByText('Completed: 1')).toBeInTheDocument(); // Write tests still completed
  });

  // Test 8: Form submission with Enter key
  test('submits form when Enter key is pressed', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('todo-form');
    
    fireEvent.change(input, { target: { value: 'Enter Todo' } });
    fireEvent.submit(form);
    
    expect(screen.getByText('Enter Todo')).toBeInTheDocument();
  });

  // Test 9: Multiple todo operations
  test('handles multiple todo operations correctly', () => {
    render(<TodoList />);
    
    // Add a todo
    fireEvent.change(screen.getByTestId('todo-input'), { 
      target: { value: 'Integration Test Todo' } 
    });
    fireEvent.click(screen.getByTestId('add-button'));
    
    expect(screen.getByText('Integration Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    
    // Toggle the new todo
    const newTodoCheckbox = screen.getByTestId('todo-checkbox-4');
    fireEvent.click(newTodoCheckbox);
    expect(newTodoCheckbox).toBeChecked();
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    
    // Delete a different todo
    fireEvent.click(screen.getByTestId('delete-button-2'));
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
  });

  // Test 10: Check if each todo has all required elements
  test('each todo item has checkbox, text, and delete button', () => {
    render(<TodoList />);
    
    // Check first todo has all elements
    const todoItem = screen.getByTestId('todo-item-1');
    expect(todoItem).toBeInTheDocument();
    
    // Check specific elements
    expect(screen.getByTestId('todo-checkbox-1')).toBeInTheDocument();
    expect(screen.getByTestId('todo-text-1')).toBeInTheDocument();
    expect(screen.getByTestId('delete-button-1')).toBeInTheDocument();
    
    // Check third todo (completed) has all elements
    expect(screen.getByTestId('todo-checkbox-3')).toBeInTheDocument();
    expect(screen.getByTestId('todo-text-3')).toBeInTheDocument();
    expect(screen.getByTestId('delete-button-3')).toBeInTheDocument();
  });
});