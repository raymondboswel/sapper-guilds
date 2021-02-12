<script>
  import Card from "@smui/card";
  import Textfield from '@smui/textfield';
  import Button from "@smui/button";
  import LinearProgress from '@smui/linear-progress';
  import Snackbar, {Label} from '@smui/snackbar';
  
  let name = '';
  let busy = false;
  let succSnackbar;
  let failSnackbar;
  let error;

  async function create() {
    busy = true;
    console.log("Attempting log in");
    const res = await fetch('/guilds', 
      {        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name })}
        ).finally((params) => {
          busy = false;
        });
       

        const parsed = await res.json();
    if (parsed.error) {
      error = parsed.error;
      failSnackbar.open();
    } else {      
      succSnackbar.open();
      name = "";
      // goto("/home")
    }
  }

</script>

<Card class="my-auto">
  <h1 class="text-2xl text-center m-4">Create a guild</h1>
  <h2 class="text-xl text-center m-4">Enter your new guild's details below</h2>
  {#if busy}
  <LinearProgress  indeterminate />
  {/if}
  <Textfield class="mt-16 mb-8 mx-16" bind:value={name} label="Guild name" input$aria-controls="Guild name" input$aria-describedby="Guild name" />
  <Button class="mb-8 w-40 mx-auto" on:click={create}>
    Create!
  </Button>

  <Snackbar bind:this={succSnackbar}>
    <Label>Successfully created guild</Label>
  </Snackbar>
  <Snackbar labelText={error} bind:this={failSnackbar}>
    <Label></Label>
  </Snackbar>
</Card>