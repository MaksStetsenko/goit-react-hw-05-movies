import { useState, useEffect, Suspense } from 'react';
import { movieAPI } from 'utils/apiServices';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { Box } from 'components/Box';
import { Container } from 'components/Common/Common.styled';
import { BackLinkStyled, AdditionalLinkStyled } from './MovieDetails.styled';

import Card from '../../components/Card';

const Api = new movieAPI();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetales, setMovieDetales] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '';
  const isMovieDetalesIsEmpty = !Object.keys(movieDetales).length;

  useEffect(() => {
    const fetchMovie = async id => {
      setMovieDetales(await Api.getMovie(id));
    };
    fetchMovie(movieId);
  }, [movieId]);

  if (isMovieDetalesIsEmpty) return;

  return (
    <main>
      <Container>
        <BackLinkStyled to={backLink}>Back</BackLinkStyled>
      </Container>

      <Card movieDetales={movieDetales} />

      <Box as="section" pb={3}>
        <Container>
          <h3>Additional info</h3>
          <Box as="ul" display="flex" gridGap={2}>
            <Box as="li">
              <AdditionalLinkStyled to="cast" state={{ from: backLink }}>
                Cast
              </AdditionalLinkStyled>
            </Box>
            <Box as="li">
              <AdditionalLinkStyled to="reviews" state={{ from: backLink }}>
                Reviews
              </AdditionalLinkStyled>
            </Box>
          </Box>

          <Suspense fallback={<div>Loading</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </main>
  );
};

export default MovieDetails;
