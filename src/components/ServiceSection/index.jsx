import { ServiceCard } from "./components/ServiceCard"
import { ServiceContainer } from "./style"
import { SetMealSharp } from '@mui/icons-material';

export const ServiceSection = () => {
    return (
        <ServiceContainer id="services">
            <ServiceCard icon={SetMealSharp} />
            <ServiceCard icon={SetMealSharp} secondary={true} />
            <ServiceCard icon={SetMealSharp} />
        </ServiceContainer>
    )
}
