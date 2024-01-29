import {PokemonDetailsProps, ResultProps, SlotProps} from 'modules/pokemon/@redux';
import {getPokemonDetails} from 'modules/pokemon/@redux/async-thunks/get-pokemon-details';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import StatusButton from 'shared/components/status-button';
import {SectionProps} from 'shared/components/text-section';
import usei18next from 'shared/hooks/use-i18next';
import {useAppDispatch, useAppSelector} from 'shared/hooks/use-redux';
import {errorNotification} from 'shared/services/notification';

const usePokemonDetails = () => {
  const {pokemonDetails} = useAppSelector((state) => state.pokemon);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const {translate} = usei18next();

  const handleGetPokemonDetails = async () => {
    setLoading(true);
    const {meta, payload} = await dispatch(getPokemonDetails(id!));
    setLoading(false);

    if (meta.requestStatus === 'rejected')
      return errorNotification({
        title: translate('notification.errorTitleDetails'),
        message: payload as string,
      });
  };

  useEffect(() => {
    handleGetPokemonDetails();
  }, []);

  const TypePokemon = (types: ResultProps[][]) => {
    const typeNames: ResultProps[] = types as any;
    const type = typeNames.map((item) => item.name);

    return type.join(', ');
  };
  const rows: SectionProps<PokemonDetailsProps>[] = [
    {
      label: 'Informações detalhadas',
      mode: 'title',
    },
    {
      value: ({name}) => ' '+name,
      label: 'Nome',
    },
    {
      value: ({types}) => (
        <StatusButton
          text={TypePokemon(types.map((item) => item.type))}
          variant="success"
        />
      ),
      label: 'Tipo',
    },
    {
      value: ({weight}) => (
        <StatusButton text={String(weight)} variant="warn" />
      ),
      label: 'Peso',
    },
    {
      value: ({abilities}) => (
        <StatusButton
          text={TypePokemon(abilities.map((item) => item.ability))}
          variant="info"
        />
      ),
      label: 'Abilidade',
    },
    {
      value: ({base_experience}) => (
        <StatusButton text={String(base_experience)} variant="warn" />
      ),
      label: 'Experiência base',
    }
  ];

  return {
    onRefresh: handleGetPokemonDetails,
    translate,
    loading,
    rows,
    pokemonDetails,
  };
};

export default usePokemonDetails;
