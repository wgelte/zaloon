function runFunc() {
    const elementeUpdate = document.getElementById('test-id')

    fetch("https://gist.githubusercontent.com/wgelte/2ac5f455906af857deb88a074bc5cbf8/raw/65fc3d306ab39d817663a30292a76048ea10e630/services.txt")
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not OK');
        }
        return response.text();
    })
    .then(data => {
        elementeUpdate.innerText = data;
    })
    .catch(error => {
        console.error(error);
    });

}