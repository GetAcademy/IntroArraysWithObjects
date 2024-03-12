function addColor() {
    if (!colorInput) return;
    themes.push(colorInput);
    isAdding = false;
    colorInput = null;
    updateView();
}

function deleteColor(index) {
    const elements = themes.splice(index, 1);
    deleted.push(elements[0]);
    updateView();
}

function startAdd() {
    isAdding = true;
    updateView();
}

function cancelAddColor() {
    isAdding = false;
    updateView();
}
