class Github{
    constructor(){
        this.client_id='a760ba8d4f0f7441a01c';
        this.client_secret='0b9670dcce334f380b4f0ebfa7f37330b69ce8d4';


    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
    
        return {
          profile
        }
      }
}