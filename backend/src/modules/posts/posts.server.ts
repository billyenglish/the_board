import { Post, CreatedPostInput, UpdatedCreatedPostInput } from "./posts.types.js";

const posts: Post[] = [];

export const CreatePost = (data: CreatedPostInput): Post => {

    const currentDate = new Date();

    const post: Post = {
        id: posts.length + 1,
        title: data.title,
        content: data.content,
        authorId: data.authorId,
        createdAt: currentDate,
        updatedAt: currentDate
    }

    posts.push(post);

    return post;
}

export const getPostById = (id: number): Post | undefined => {
    const post = posts.find((postId) => postId.id === id);

    return post;
}

export const getAllPostById = (authorId: number): Post[] => {

    const post = posts.filter((posts) => posts.authorId === authorId);

    return post;

}

