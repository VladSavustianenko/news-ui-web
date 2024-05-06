export interface Topic {
    id: number,
    author: string,
    headline: string,
    teaser: string,
    description: string,
    section: string,
    subsection: string
    date: string,
    image: string | null,
}

export interface Categories {
    topic: string,
    subtopics: string[] | null
}

export interface ViewHistory {
    topicId: number
    viewType: (typeof ViewType)[keyof typeof ViewType]
}

export const ViewType = {
    Other: 0,
    Basic: 1,
    Recommended: 2,
    Relevant: 3,
}