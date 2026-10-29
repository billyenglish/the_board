export interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreatedPostInput {
    title: string;
    content: string;
    authorId: number;
}

export interface UpdatedCreatedPostInput {
    title: string;
    content: string;
}