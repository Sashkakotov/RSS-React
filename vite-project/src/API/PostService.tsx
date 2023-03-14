class PostService {
  static async getAll() {
    const response = await fetch('./fakeJSON.js');
    console.log(response);
    return response;
  }
}
export default PostService;
