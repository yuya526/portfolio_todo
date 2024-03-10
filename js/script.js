// グローバル空間に変数や関数をセットしないために、即時関数で閉じ込める
(() => {
  // Todoリストを保持する配列
  const todos = [];

  const inputBox= document.getElementById('input_box');
  const addButton= document.getElementById('add_button');
  const todoItemContainer= document.getElementById('todo_list');

  /* ----------------------------------
      addButtonの処理
  ----------------------------------- */
  //   入力されたテキストをTodoリストに追加、inputBoxを空に。
  addButton.addEventListener('click', (event) => {
    const todo = inputBox.value;
    inputBox.value = '';
    // console.log(todo);

    if(todo){
      todos.push(todo);
      showTodos();
    }
  })

  /* ----------------------------------
      showTodos関数
  ----------------------------------- */
  const showTodos = () => {

    // これがないと、前回までの全てのtodoItemを含めて表示してしまう
    while(todoItemContainer.firstChild){
      todoItemContainer.removeChild(todoItemContainer.firstChild);
    }

    todos.forEach((value,index) => {
      const todoItem = document.createElement('li');
      const todoNumber = index + 1;

      todoItem.textContent = `${todoNumber} : ${value}`;
      todoItemContainer.appendChild(todoItem);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除する';
      todoItem.appendChild(deleteButton);
      
      deleteButton.addEventListener('click',(event) => {
        // todoNumberだと一つ後ろが削除される
        deleteTodo(index);
      });
    });
  };

  /* ----------------------------------
      deleteTodo関数
  ----------------------------------- */
  const deleteTodo = (index) => {
    todos.splice(index, 1);
    showTodos();
  };

})();