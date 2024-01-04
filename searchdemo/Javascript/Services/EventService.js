class EventService
{
    static url="http://localhost:3000/events";

    static async getEventDetails()
    {
        return await axios.get(this.url);

    }
    
    static async getEventDetailsById(id)
    {
        let response = await axios.get(this.url+"/"+id);
        return response.data;

    }

}

export default EventService;