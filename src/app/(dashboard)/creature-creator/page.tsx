import CreatureGallery from '@features/creature-creator/pages/creatureGallery';
import { PageContainer } from '@toolpad/core/PageContainer';

export default function CreatureCreatorPage() {
    return <PageContainer maxWidth={false} title='Creature Creator'>
        <CreatureGallery />
    </PageContainer>
}
