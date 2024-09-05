import React from 'react'
import { createContext, useState, useEffect } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
import TodoPage from './pages/TodoPage';
import NotFoundPage from './pages/NotFoundPage';
import CreatePage from './pages/CreatePage';


export const Context = createContext();

function App() {

  // Set state for todoLists
  const [todoLists, setTodoLists] = useState([]);


  // Load in todoLists from local storage
  useEffect(() => {

    const loadTodosLocal = async () => {
      try {
        const res = await fetch("/todos.json");
        const data = await res.json();
        setTodoLists(data.todos);
      } catch (error) {
        console.error("Failed to load todo list:", error);
      }
    };

    loadTodosLocal();
    console.log("Loaded todo list!");
  }, []);


  // Add a new todo list 
  const addTodoList = (newTodoList) => {

    const todoListId = (todoLists.length > 0 ? parseInt(todoLists[todoLists.length - 1].id, 10) + 1 : 1).toString();
    const todoListToAdd = {...newTodoList, id: todoListId, name: newTodoList.name, cards: [], creator: {name: newTodoList.creator}};
    console.log(todoListToAdd);
    setTodoLists([...todoLists, todoListToAdd]);
  };


  // Add a new todo card to a todo list
  const addTodoCard = (todoListId, newCard) => {
    setTodoLists(prevTodoList => {
      return prevTodoList.map(todoList => {
        if (todoList.id === todoListId) {
          const newCardId = todoList.cards.length > 0 ? parseInt(todoList.cards[todoList.cards.length - 1].id, 10) + 1 : 1;
          const cardToAdd = { ...newCard, id: newCardId, name: newCard.name, todos: []};
          return {
            ...todoList,
            cards: [...todoList.cards, cardToAdd]
          };
        }
        return todoList;
      });
    });
  }


  // Add a new todo card entry to a todo card
  const addTodoCardEntry = (todoListId, cardId, newEntry) => {
    setTodoLists(prevTodoList => {
      return prevTodoList.map(todoList => {
        if (todoList.id === todoListId) {
          return {
            ...todoList,
            cards: todoList.cards.map(card => {
              if (card.id === cardId) {
                const newEntryId = card.todos.length > 0 ? parseInt(card.todos[card.todos.length - 1].id, 10) + 1 : 1;
                const entryToAdd = { ...newEntry, id: newEntryId, name: newEntry.name, description: newEntry.description, creator: {name: newEntry.creator} };
                return {
                  ...card,
                  todos: [...card.todos, entryToAdd]
                };
              }
              return card;
            })
          };
        }
        return todoList;
      });
    })

  }

  // Delete a todo list
  const deleteTodoList = (id) => {
    
    setTodoLists(todoLists.filter(todo => todo.id !== id));
  }


  // Delete todo card 
  const deleteTodoCard = (todoListId, cardId) => {
    setTodoLists(todoLists.map(todoList => {
      if (todoList.id === todoListId) {
        return {
          ...todoList,
          cards: todoList.cards.filter(card => card.id !== cardId)
        };
      }
      return todoList;
    }));
  };


  // Delete todo card entry
  const deleteTodoCardEntry = (todoListId, cardId, entryId) => {
    console.log(todoListId, cardId, entryId);
    setTodoLists(todoLists.map(todoList => {
      if (todoList.id === todoListId) {
        return {
          ...todoList,
          cards: todoList.cards.map(card => {
            if (card.id === cardId) {
              return {
                ...card,
                todos: card.todos.filter(todo => todo.id !== entryId)
              };
            }
            return card;
          })
        };
      }
      return todoList;
    }));
  };


  // Update a todo list
  const updateTodoList = (updatedTodoList) => {

    setTodoLists(
      todos.map(todo =>
        todo.id === updatedTodoList.id ? updateTodoList : todo
      )
    );
  }


  // Routing
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path='/' 
        element={<MainLayout />}
      >
        <Route 
          index 
          element={<HomePage />}
        /> 
        <Route 
          path='create' 
          element={<CreatePage 
            addTodoList={addTodoList}/>}
          
        />
        <Route 
          path='todo-list' 
          element={<TodosPage
          />} 
        />
        <Route 
          path='todo-list/:id' 
          element={<TodoPage 
            addTodoCard={addTodoCard}
            addTodoCardEntry={addTodoCardEntry}
            deleteTodoList={deleteTodoList} 
            deleteTodoCard={deleteTodoCard} 
            deleteTodoCardEntry={deleteTodoCardEntry} 
            />} 
          />
        <Route 
          path='*' 
          element={<NotFoundPage />} 
        />
      </Route>


    )
  )


  return (
    <Context.Provider value={[todoLists, setTodoLists]}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}

export default App
