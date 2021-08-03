export interface Survey {
    _id: string,
    title: string,
    description: string,
    questions: Question[],
    answers: Answer[],
    slug: string,
}

export interface Question {
    _id: string,
    type: string,
    title: string,
    options: Option[],
}

export interface Option {
    _id: string,
    title: string,
    value: string,
    count: number,
}

export interface Answer {
    _id: string,
    survey: string,
    name: string,
    choices: {
        _id: string,
        question: string,
        value: string,
    }[]
}
