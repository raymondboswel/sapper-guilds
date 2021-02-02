<script>
  import Card from "@smui/card";
  import Button, { Label } from "@smui/button";
  import Paper, { Subtitle } from "@smui/paper";
  import Textfield from "@smui/textfield";
  import { goto } from '@sapper/app';
  import { stores } from '@sapper/app';
  import {HttpClient} from '../../scripts/http';
  const { preloading, page, session } = stores();
  
  const http = new HttpClient()

  let email = "raymondboswel+3@gmail.com";
  let password = "letmein123123";

  async function login() {
    console.log("Attempting log in");
    const res = await http.post('users/log_in', 
      {
         user: {
           email, 
           password}
          }
        );
    if(res.status === 200) {
      console.log("session", session);
      const body = await res.json();
      const token = body.data.token;
      console.log("token", body.data.token);
      session.update((sesh) => {return {...sesh, token}});

      goto("/home")
    } else {
      session.token = false;
    }
    console.log(res);
        
    
  } 

  async function register() {
    console.log("Attempting log in");
    const res = await fetch('http://localhost:4100/api/users/register', 
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
      <Button class="my-6" on:click={register} >
        <Label>
          Register
        </Label>
      </Button>
    </content>
  </Paper>
</Card>
