import KhanAcademy from '../images/database/khan-academy.png';
import CityYear from '../images/database/city-year.png';
import NewTeacherProject from '../images/database/new-teacher-project.png'

const SearchResults = [
    {
        name: 'Khan Academy',
        description: 'Khan Academy creates a set of online tools that help educate students. The organization produces short lessons in the form of videos. Its website also includes supplementary practice exercises and materials for educators',
        img: KhanAcademy,
        resources: ['Math', 'Economics', 'Arts & Humanities', 'Science', 'Computing', 'Test prep'],
        contact: {
            website: 'https://www.khanacademy.org/',
            twitter: 'https://twitter.com/khanacademy',
            instagram: 'https://instagram.com/khanacademy'
        },
        learningAttributes: ['self-paced', 'remote']
    },

    {
        name: 'City Year',
        description: 'City Year is an education nonprofit organization dedicated to helping students and schools succeed. Learn how City Year creates environments where students can thrive.',
        img: CityYear,
        resources: ['Leadership', 'Community service', 'Career readiness'],
        contact: {
            website: 'https://www.cityyear.org/',
            location: '287 Columbus Avenue, Boston, MA 02116',
            twitter: 'https://twitter.com/cityyear/',
            instagram: 'https://instagram.com/cityyear/'
        },
        learningAttributes: ['gap year', 'seasonal']
    },

    {
        name: 'The New Teacher Project',
        description: 'TNTP, formerly known as The New Teacher Project, is an organization in the United States with a mission of ensuring that poor and minority students get equal access to effective teachers.',
        img: NewTeacherProject,
        resources: ['Teachers', 'Partnership with Schools'],
        contact: {
            website: 'https://tntp.org/',
            location: '500 7th Avenue, 8th Floor, New York, NY 10018',
            twitter: 'http://twitter.com/TNTP',
            instagram: 'https://www.instagram.com/tntp/'
        },
        learningAttributes: ['partnership with schools', 'multiple locations']
    }
]

export default SearchResults;