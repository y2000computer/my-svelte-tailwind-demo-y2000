<script>
  import { onMount } from 'svelte'
  let posts = []
  onMount(() => {
    //fetch('https://api.nuxtjs.dev/mountains')
    fetch('https://cms-uat.y2kcomputer.com/erp/en-US/api_article')
      .then(response => response.json())
      .then(result => posts = result)
  })
</script>


<div class="container mx-auto mt-8">

{#each posts as post }


      <div class="md:flex pt-6">
        <div class="md:flex-shrink-0">
          <img class="rounded-lg md:w-20" src="{post.imgs}" alt="Mountain">
        </div>

        <div class="mt-4 md:mt-0 md:ml-6">
            <div class="uppercase tracking-wide text-sm font-bold">
              2024-01-11{post.headline}
              <div class="mt-2 text-gray-600">
                {post.content}
              </div>            
            </div> 
        </div>   
      </div>



{/each}

</div>


