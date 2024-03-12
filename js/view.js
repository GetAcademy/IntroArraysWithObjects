function updateView() {
    const themes = model.themes;
    let html = '';
    for (let index = 0; index < themes.length; index++) {
        let theme = themes[index];
        html += /*HTML*/`
            <div class="color">
                <div class="topBox">
                    <div>${theme.back} - ${theme.fore} - ${theme.highlight} - laget av ${theme.madeBy}</div>
                    <button onclick="deleteTheme(${index})">x</button>
                </div>
                <div style="
                    background-color: ${theme.back};
                    color: ${theme.fore};
                    " class="box">
                    <span style="color: ${theme.highlight}">Eksempel-highlight</span>
                    Eksempel-tekst                
                </div>
            </div>                
        `;
    }

    document.getElementById('app').innerHTML = /*HTML*/`
        <h3>Farge-themes</h3>
        ${createAddColorHtml()}
        <hr/>
        <div class="colors">
            ${html}
        </div>
    `;
}

function createAddColorHtml() {
    if (model.isAdding) {
        return /*HTML*/`
            Forgrunnsfarge:<br/>
            <input 
                type="text" 
                oninput="model.themeInput.fore=this.value" 
                value="${model.themeInput.fore ?? ''}"
                /><br/>
            Bakgrunnsfarge:<br/>
            <input 
                type="text" 
                oninput="model.themeInput.back=this.value" 
                value="${model.themeInput.back ?? ''}"
                /><br/>
            Fremhevingsfarge:<br/>
            <input 
                type="text" 
                oninput="model.themeInput.highlight=this.value" 
                value="${model.themeInput.highlight ?? ''}"
                /><br/>
            Laget av:<br/>
            <input 
                type="text" 
                oninput="model.themeInput.madeBy=this.value" 
                value="${model.themeInput.madeBy ?? ''}"
                /><br/>            

            <button onclick="addColor()">Legg til ny theme</button>
            <button onclick="cancelAddColor()">Avbryt</button>                
        `;
    } else {
        return /*HTML*/`
            <button onclick="startAdd()">+</button>
        `;
    }
}