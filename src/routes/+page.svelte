<script>
    let username = $state()
    let password = $state()
  import { Input } from "$lib/components/ui/input/index.js";

//   login auth/login
const login = async () =>   {
    await fetch('http://localhost:5173/api/auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username,
          password
      })
    })    
    .then(res => res.json())
}
  </script>

<div class="flex justify-center items-center">
    <div class="w-1/3 p-6 border rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
        <form class="space-y-4">
        <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <Input id="username" type="text" bind:value={username} class="mt-1 block w-full" placeholder="Enter your username" />
        </div>
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <Input id="password" type="password" bind:value={password} class="mt-1 block w-full" placeholder="Enter your password" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onclick={login}>Login</button>
        </form>
    </div>
</div>
