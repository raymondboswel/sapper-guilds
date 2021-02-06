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
    const res = await fetch('/login', 
      {        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password })}
        );

        const parsed = await res.json();

    if (parsed.error) {
      error = parsed.error;
    } else {
      console.log(parsed);
      $session.token = parsed.token;
      goto("/home")
    }

    // if(res.status === 200) {
    //   console.log("session", session);
    //   const body = await res.json();
    //   const token = body.data.token;
    //   console.log("token", body.data.token);
    //   localStorage.setItem('token', body.data.token);
    //   console.log("Navigating to home");
    //   goto("/home")
    // } else {
    //   session.token = false;
    // }
    console.log(res);
        
    
  } 

  async function register() {
    const res = await fetch('/login', 
      {method: 'POST', 
       headers: {
        "Content-Type":"application/json",
        Accept: "application/json",
       },
       body: JSON.stringify({       
           email, 
           password
          })
        })
        console.log(res);
    
  } 
  
</script>
<section class="flex flex-col container mx-auto mt-16 ">
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
</section>