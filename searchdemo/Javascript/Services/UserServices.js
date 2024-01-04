class UserServices
{
    static url="http://localhost:3000/user";
    static async getUserDetailsById(id){
        let response = await axios.get(this.url+"/"+id);
        return response.data;

    }
}
export default UserServices;