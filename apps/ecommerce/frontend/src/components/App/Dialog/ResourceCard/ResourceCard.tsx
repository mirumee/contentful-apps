import { useEffect, useState } from 'react';
import { Badge, Box, Card, Flex, Grid, Text } from '@contentful/f36-components';
import { styles } from './ResourceCard.styles';
import { ExternalResource } from 'types';

export interface ResourceCardProps {
  resource: ExternalResource;
  cardHeader: string;
  onSelect: (resource: ExternalResource) => void;
  selectedResources: ExternalResource[];
}

const ResourceCard = (props: ResourceCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { resource, cardHeader, onSelect, selectedResources } = props;

  useEffect(() => {
    const isSelectedResource = selectedResources.find((item) => {
      return item.id === resource.id;
    });

    setIsSelected(!!isSelectedResource);
  }, [selectedResources, resource.id]);

  return (
    <Card
      padding="none"
      className={styles.resourceCard}
      isSelected={isSelected}
      onClick={() => {
        onSelect(resource);
      }}>
      <Box paddingLeft="spacingM" className={styles.resourceCardHeader}>
        <Flex alignItems="center" fullWidth={true} justifyContent="space-between">
          <Text fontColor="gray600" isWordBreak={true}>
            {cardHeader}
          </Text>
          <Flex alignItems="center" isInline={true}>
            {resource.status && (
              <Box className={styles.badge}>
                <Badge variant="featured" className={styles.badge}>
                  {resource.status}
                </Badge>
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>
      <Box padding="spacingM">
        <Flex fullWidth={true} justifyContent="space-between">
          <Grid rowGap="spacingXs">
            <Grid.Item>
              <Text
                fontSize="fontSizeL"
                fontWeight="fontWeightDemiBold"
                lineHeight="lineHeightL"
                isWordBreak={true}>
                {resource.name}
              </Text>
            </Grid.Item>
            <Grid.Item>
              <Text>{resource.description}</Text>
            </Grid.Item>
          </Grid>
          {resource.image && (
            <img src={resource.image} alt={resource.name} width="70" height="70" />
          )}
        </Flex>
      </Box>
    </Card>
  );
};

export default ResourceCard;
