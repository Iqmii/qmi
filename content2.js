document.getElementById("neutralBlock").addEventListener('click', function() {
    let block = document.getElementById("blockRegistr");
    if (block) {
        let currentOpacity = window.getComputedStyle(block).opacity;
        block.style.opacity = currentOpacity === "0" ? "1" : "0";
        console.log("Opacity змінено для mainPanelBlock.");
    } else {
        console.error("Елемент mainPanelBlock не знайдено.");
    }
    document.getElementById('blockRegistr').classList.toggle('open');
});