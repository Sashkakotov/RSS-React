class PostService {
  static async getAll() {
    const response = await fetch('./fakeJSON.js');
    return response;
  }
}
export default PostService;
