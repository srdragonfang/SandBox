- **Creating new HTML Elements - insertBefore()**
    
    appendChild() → appended the new element as the last child of the parent.
    
    insertBefore()
    
    ```jsx
    <div id="div1">
      <p id="p1">This is a paragraph.</p>
      <p id="p2">This is another paragraph.</p>
    </div>
    
    <script>
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    
    const element = document.getElementById("div1");
    const child = document.getElementById("p1");
    element.insertBefore(para, child);
    </script>
    ```
    
- **Removing Existing HTML Elements**
    
    remove()
    const elmnt = document.getElementById("p1"); 
    elmnt.remove();

**Removing a Child Node**
    
    parent.removeChild(child);
    ```jsx
    <div id="div1">
      <p id="p1">This is a paragraph.</p>
      <p id="p2">This is another paragraph.</p>
    </div>
    
    <script>
    const parent = document.getElementById("div1");
    const child = document.getElementById("p1");
    parent.removeChild(child);
    </script>
    ```