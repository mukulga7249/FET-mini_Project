class MovieServices
{
    static url="http://localhost:3000/movies";

    static async getMovieDetails()
    {
        return await axios.get(this.url);

    }
    
    static async getMovieDetailsById(id)
    {
        let response = await axios.get(this.url+"/"+id);
        return response.data;

    }

}

export default MovieServices;