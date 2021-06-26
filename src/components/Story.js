import React, {useState, useEffect, memo} from 'react';
import {getStory} from '../services/hnApi';
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from '../styles/StoryStyles';
import {mapTime} from '../mappers/mapTime';
import Spinner from '../components/Spinner'


export const Story = memo(function Story({storyId}) {
    const [story,
        setStory] = useState({name: 'das'});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    },);

    return story && story.url
        ? (
            <StoryWrapper data-testid="story">
                <StoryTitle>
                    <a href={story.url}>{story.title}</a>
                </StoryTitle>
                <StoryMeta>
                    <span data-testid="story-by">
                        <StoryMetaElement color="#000">By: </StoryMetaElement>
                        {story.by}
                    </span>
                    <span data-testid="story-time">
                        <StoryMetaElement color="#000">Posted: </StoryMetaElement>
                        {` `}
                        {mapTime(story.time)} ago
                    </span>
                </StoryMeta>
            </StoryWrapper>
        )
        : null;
});