import {ResultProps} from 'modules/pokemon/@redux';
import {getPokemons} from 'modules/pokemon/@redux/async-thunks/get-pokemons';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ExtractProjectionKey, ProjectionProps} from 'shared/components/table';
import usei18next from 'shared/hooks/use-i18next';
import {useAppDispatch, useAppSelector} from 'shared/hooks/use-redux';
import {errorNotification} from 'shared/services/notification';
import {FilterQueryProps} from 'shared/util/encode-filters';
import {Image} from '@mantine/core';

const useLoginState = () => {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [projection, setProjection] = useState<
    ExtractProjectionKey<ResultProps>[]
  >(['name', 'url', '_id']);

  const navigate = useNavigate();
  const [filters, setFilters] = useState<FilterQueryProps>({});

  const dispatch = useAppDispatch();
  const {translate} = usei18next();

  const {limit, pokemons} = useAppSelector((state) => state.pokemon);

  const tableProjection: ProjectionProps<ResultProps> = {
    onChange: setProjection,
    translationKey: 'pokemon:label',
    values: projection,
    filter: {filters, onChange: setFilters},
    options: [
      'name',
      'url',
      {
        value: '_id',
        label: 'img',
        column: {
          value: (row) => (
            <Image
              width="40%"
              fit="contain"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                row.url.split('/')[6]
              }.png`}
            />
          ),
        },
      },
    ],
  };

  const handleGetPokemons = async () => {
    setLoading(true);
    const {meta, payload} = await dispatch(getPokemons({filters, limit}));
    setLoading(false);

    if (meta.requestStatus == 'rejected')
      errorNotification({
        title: translate('pokemon:notification.errorTitle'),
        message: payload as string,
      });
  };

  const onLoadMore = async () => {
    setLoadingMore(true);
    const {meta, payload} = await dispatch(
      getPokemons({filters, limit: limit + 6}),
    );
    setLoadingMore(false);

    if (meta.requestStatus === 'rejected')
      errorNotification({
        title: translate('pokemon:notification.errorTitle'),
        message: payload as string,
      });
  };

  useEffect(() => {
    handleGetPokemons();
  }, [filters, projection, projection]);

  const onRowClick = (row: ResultProps) =>
    navigate(`details/${row.url.split('/')[6]}`);

  return {
    loading,
    onLoadMore,
    data: pokemons,
    loadingMore,
    onRefresh: handleGetPokemons,
    tableProjection,
    onRowClick,
  };
};

export default useLoginState;
