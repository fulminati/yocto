
function run() {

    ajax({url:'api/list.json'}, function(list, asa) {
        console.log(list, asa)
    })

}
