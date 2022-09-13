export type Subreddits = Subreddit[]

export type Subreddit = {
    title:           string;
    officialTitle:   string;
    logo:            string;
    category:        string;
    favorite:        boolean;
    joined:          boolean;
    about:           string;
    members:         string;
    online:          string;
    creationDate:    string;
    rules:           Rule[];
    flairs:          Flair[];
    anchors:         string[];
    buttonColor:     string;
    headerColor:     string;
    blackText:       boolean;
    backgroundColor: string;
    bannerUrl:       string;
}

export type Flair = {
    title: string;
    color: string;
}

export type Rule = {
    number: number;
    title:  string;
    desc:   string;
}
