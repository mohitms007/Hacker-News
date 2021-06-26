import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const { count,loading } = useInfiniteScroll();
  console.log(loading)
  const [storyIds, setStoryIds] = useState(null);

  useEffect(() => {
    getStoryIds().then(({data}) => setStoryIds(data));
  }, [count]);

  return storyIds ?  (
    <>
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  ): <Spinner />;
        };
        export default StoriesContainer;