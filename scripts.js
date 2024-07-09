document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
    loadPatents();
});

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

function loadPatents() {
    const patents = [
        { title: "Patent Title 1", link: "link_to_patent_1" },
        { title: "Patent Title 2", link: "link_to_patent_2" }
        // Add more patents as needed
    ];
    
    const patentList = document.getElementById('patent-list');
    patents.forEach(patent => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = patent.link;
        link.textContent = patent.title;
        listItem.appendChild(link);
        patentList.appendChild(listItem);
    });
}
