<script>
  import { onMount } from 'svelte'
  let posts = []
  onMount(() => {
    fetch('https://api.nuxtjs.dev/mountains')
      .then(response => response.json())
      .then(result => posts = result)
  })
</script>


<div class="container mx-auto mt-8">

{#each posts as post }


      <div class="md:flex pt-6">
        <div class="md:flex-shrink-0">
          <img class="rounded-lg md:w-30" src="{post.image}" alt="Mountain">
        </div>

        <div class="mt-4 md:mt-0 md:ml-6">
            <div class="uppercase tracking-wide text-sm font-bold">
              {post.title}
              <div class="mt-2 text-gray-600">
                {post.description}
              </div>            
            </div> 
        </div>   
      </div>



{/each}

</div>


