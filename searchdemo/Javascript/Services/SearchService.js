class SearchService
{
    static url1="http://localhost:3000/events";
    static url2="http://localhost:3000/movies";
    static url3="http://localhost:3000/sports";

    static async getEventSearch(searchterm)
    {
        try{
            const response=await axios.get(this.url1);
            console.log(response.data);
            let data=response.data;
            return data.filter(obj=>obj.title.toLowerCase().includes(searchterm));
        }
        catch(error){
            console.error("Error found ",error);
            throw error;
        }

        

    }
    
    static async getMoviesSearch()
    {
        return await axios.get(this.url2);

    }
    
    static async getSportsSearch()
    {
        return await axios.get(this.url3);

    }
    
    

}

export default SearchService;