var undoStack = [];
var redoStack = [];
var editor = document.getElementById("editor");
function insertTag(tag) {
  var startPos = editor.selectionStart;
  var endPos = editor.selectionEnd;
  var text = editor.value;
  var newText = text.substring(0, startPos) + tag + text.substring(endPos);
  editor.value = newText;
  // Move the cursor to the end of the inserted tag
  undoStack.push({
    value: text,
    start: startPos,
    end: endPos,
  });
  redoStack = []; // Clear redo stack
  editor.focus();
  // Move the cursor to the end of the inserted tag
  editor.setSelectionRange(startPos + tag.length, startPos + tag.length);
  // Trigger the updatePreview function to show the updated preview
}
function executeCommand(command) {
  if (command === "undo") {
    if (undoStack.length > 0) {
      var currentState = {
        value: editor.value,
        start: editor.selectionStart,
        end: editor.selectionEnd,
      };
      redoStack.push(currentState);

      var previousState = undoStack.pop();
      editor.value = previousState.value;
      editor.setSelectionRange(previousState.start, previousState.end);
    } else {
      editor.dispatchEvent(
        new KeyboardEvent("keydown", { key: "z", ctrlKey: true })
      );
    }
  } else if (command === "redo") {
    if (redoStack.length > 0) {
      var currentState = {
        value: editor.value,
        start: editor.selectionStart,
        end: editor.selectionEnd,
      };
      undoStack.push(currentState);

      var nextState = redoStack.pop();
      editor.value = nextState.value;
      editor.setSelectionRange(nextState.start, nextState.end);
    } else {
      editor.dispatchEvent(
        new KeyboardEvent("keydown", { key: "y", ctrlKey: true })
      );
    }
  }
}
function prettifyEditor() {
  var text = editor.value;
  var formattedCode = prettier.format(text, {
    parser: "html",
    plugins: prettierPlugins,
  });
  editor.value = formattedCode;
}
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "p") {
    event.preventDefault();
    prettifyEditor();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key === "l") {
    event.preventDefault();
    prettifyEditor();
  }
});
function openPreview() {
  var previewContent = editor.value;
  var newTab = window.open();
  newTab.document.open();
  newTab.document.write(previewContent);
  newTab.document.close();
}

// editor.addEventListener("input", updatePreview);
