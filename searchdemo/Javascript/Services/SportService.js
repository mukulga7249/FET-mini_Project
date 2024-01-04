class SportService
{
    static url="http://localhost:3000/sports";

    static async getSportDetails()
    {
        return await axios.get(this.url);

    }
    
    static async getSportDetailsById(id)
    {
        let response = await axios.get(this.url+"/"+id);
        return response.data;

    }

}

export default SportService;