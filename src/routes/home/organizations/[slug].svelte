
<script context="module">
  export async function preload(page, session) {
    const { token } = session;
    const { host, path, params, query } = page;
    if (!token) {
      return this.redirect(302, "login");
    }

    const response = await this.fetch(`http://localhost:4100/api/organizations/${params.slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    });  

    const parsed = await response.json();

    if (parsed.error) {
      return this.error(response.status, parsed.error);
    }  
  
    return { organization: parsed.data };
  }
</script>

<script>
  import List, { Item, Text} from '@smui/list';
  import Card from "@smui/card";
  import { goto } from '@sapper/app';
  export let organization;

  function gotoGuild(org) {

  }
</script>

<Card class="my-auto">
  <h1 class="text-2xl text-center m-4">Organization: {organization.name}</h1>
  <h2 class="text-xl text-center m-4">Select a guild to manage, or
    <a class="underline cursor-pointer text-blue-400" href="/home/guilds/create">create a new one.</a></h2>
  <ul>
    {#each organization.guilds.data as guild}
    <List class="demo-list">     
      <Item on:SMUI:action={() => gotoGuild(guild)}><Text>{guild.name}</Text></Item>
    </List>
    {/each}
  </ul>
</Card>