fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    // .then(response => response.json())
    .then(result => {
        console.log(result)
        document.write(JSON.stringify(result))
    }
        
    )
