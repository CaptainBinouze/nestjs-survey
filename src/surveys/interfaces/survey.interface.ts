export interface Survey {
    title: string,
    description: string,
    questions: Question[],
    answers: Answer[],
    slug: string,
}

export interface Question {
    type: string,
    title: string,
    options: Option[],
}

export interface Option {
    title: string,
    value: string,
}

export interface Answer {
    question: string,
    value: string,
}
