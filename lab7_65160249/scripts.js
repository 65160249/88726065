document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    // อาร์เรย์สำหรับเก็บรายการ  Todo
    let todos = [];
    // เพิ่มรายการ  Todo
    function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
    const todoItem = {
    
    text: todoText,
    completed: false,
    };
    //todos.push(todoItem); - คือการเพิ่ม todoItem ลงในอาร์เรย์ todos ที่เป็นรายการของงานทั้งหมด
    todos.push(todoItem);
    renderTodoList();
    todoInput.value = "";
    }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
        }
        //ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
        }
    
    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
        console.log(todos);

        // ล้างค่า HTML ภายใน element ที่มี id หรือชื่อว่า todoList
        // เพื่อทำความสะอาดก่อนที่จะแสดงข้อมูลใหม่
        todoList.innerHTML = "";
        
        // วนลูปผ่านทุกรายการในอาร์เรย์ todos
        for (let i = 0; i < todos.length; i++) {
        
            // ดึงข้อมูลรายการงานที่ตำแหน่ง i
            const todoItem = todos[i];
        
            // สร้าง element <li> (list item) เพื่อแสดงผลรายการงาน
            const listItem = document.createElement("li");
            
            // กำหนดข้อความของ list item เป็นข้อความของรายการงาน
            listItem.textContent = todoItem.text;
        
            // ถ้ารายการงานถูกทำเสร็จแล้ว, เพิ่ม class "completed" เพื่อสร้างสีหรือสไตล์
            if (todoItem.completed) {
                listItem.classList.add("completed");
            }
            // สร้างปุ่มลบและเพิ่ม Event Listener เพื่อเรียกฟังก์ชัน deleteTodo(i)
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));
        
            // สร้างปุ่มเสร็จ/ยกเลิก และเพิ่ม Event Listener เพื่อเรียกฟังก์ชัน toggleComplete(i)
            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
            completeButton.addEventListener("click", () => toggleComplete(i));
        
            // เพิ่มปุ่มลบและปุ่มเสร็จ/ยกเลิกลงใน list item
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
        
            // เพิ่ม list item ลงใน element ที่มี id หรือชื่อว่า todoList
            todoList.appendChild(listItem);
        }
    }
    // การกดปุ่ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    addTodo();
    }
    });
    
    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
    });