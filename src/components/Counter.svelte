<script>
let count = 1

function increase(){
    count += 1
}
</script>
<button on:click={increase} class="bg-red-400 rounded-md p-2">Count <span class="bg-white p-1 rounded-r-md">{count}</span></button>