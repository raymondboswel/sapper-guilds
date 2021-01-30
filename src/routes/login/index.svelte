<script>
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons
  } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import Paper, { Title, Subtitle } from "@smui/paper";
  import Textfield from "@smui/textfield";

  let email = "";
  let password = "";

  async function login() {
    console.log("Attempting log in");
    const res = await fetch('http://localhost:4100/api/users/log_in', 
      {method: 'POST', 
       headers: {
        "Content-Type":"application/json"
       },
       body: JSON.stringify({
         user: {
           email, 
           password}
          })
        })
        console.log(res);
    
  } 
  
</script>

<img src="/guilds_banner.png" alt="banner" />
<Card class="my-16">
  <Paper class="paper-demo">
    <title>Sign In</title>
    <Subtitle>Sign in, or register to start using Guilds</Subtitle>
    <content class="flex flex-col ">
      <Textfield label="Email" bind:value="{email}" type="email"></Textfield>
      <Textfield
        label="Password"
        bind:value="{password}"
        type="password"
      ></Textfield>
      <Button class="my-6" on:click={login}>
        <Label>
          Sign In
        </Label>
      </Button>
      <div class="text-center">OR</div>
      <Button class="my-6"  >
        <Label>
          Register
        </Label>
      </Button>
    </content>
  </Paper>
</Card>
