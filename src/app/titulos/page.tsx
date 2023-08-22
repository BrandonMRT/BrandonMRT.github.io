import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from '@/components/MediaCard';
import dynamic from 'next/dynamic'

const Credly = dynamic(() => import('@/components/Credly'), { ssr: false })
const CredlyLib = dynamic(()=> import('@/components/CredlyLib'),{ssr:false})
export default function StarredPage() {
	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="body1" gutterBottom>
					Durante años me he capacitado en distintas ramas del desarrollo, tanto front-end como back-end
				</Typography>
				<Grid container rowSpacing={3} columnSpacing={3}>
					<Grid xs={6}>
						<MediaCard
							heading="Ingenieria en sistemas computacionales (2017-2020)"
							text="Egresado de la universidad tecnologica en linea con promedio de 8.3, cedula profesional #12208637"
							url="pdfs/013986.pdf"
						/>
					</Grid>
					<Grid xs={6}>
						<MediaCard
							heading="Tecnico en computacion (2010-2012)"
							text="Egresado como tecnico en computación en la Escuela Nacional Preparatoria Plantel 9 con mencion honorifica"
							url=""
						/>
					</Grid>
				</Grid>
				<h3>Certificaciones y medallas</h3>
				<Grid container rowSpacing={3} columnSpacing={3}  >
					<Grid xs={2}>
						<Credly badgeId="c49c5623-de2a-4f85-a8f1-33be52a18783" />
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="aff7860e-5bb2-4aa9-a4b7-6e91565d3ab4" />
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="8736f500-bec7-4f95-8b53-3677eb4c1f27" />
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="db8ec3a8-32ca-4535-bfbf-3c2c766a9838"/>
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="41c5aa21-f027-4f13-bce9-61ae04516d88"/>
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="256d984a-5ed9-4e00-8452-d3d313004ac0" />
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="0336d5e3-6c7e-47ca-86a3-9cff69e9e78d" />
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="aff7860e-5bb2-4aa9-a4b7-6e91565d3ab4" />
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="aff7860e-5bb2-4aa9-a4b7-6e91565d3ab4" />
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="46996678-6ae1-4020-a755-37048bafbf1c" />
					</Grid>
					<Grid xs={2}>
						<Credly badgeId="543fb99f-1624-4e85-a92b-619279d11e57" />
					</Grid>
				</Grid>
				<Grid container rowSpacing={3} columnSpacing={3}  >
					<Grid xs={12}>
						<MediaCard
							heading="ITILv3 Foundations"
							text="Manejo del ciclo de vida con buenas practicas"
							url="https://www.axelos.com/successful-candidates-register/"
						/>
					</Grid>
				</Grid>
				<h3>Cursos platzi</h3>
				<Grid container rowSpacing={3} columnSpacing={3}>
					<Grid xs={3}>
						<MediaCard
							heading="Curso basica de Javascript"
							text=""
							url="pdfs/diploma-basico-javascript.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Bases de datos"
							text=""
							url="pdfs/diploma-bd.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Diseño web para programadores"
							text=""
							url="pdfs/diploma-diseno-programadores.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Fundamentos javascript"
							text=""
							url="pdfs/diploma-fundamentos-javascript-2018.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Fundamentos nodejs"
							text=""
							url="pdfs/diploma-fundamentos-node.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Git"
							text=""
							url="pdfs/diploma-git-github.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Laravel"
							text=""
							url="pdfs/diploma-intro-laravel-2020.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="PHP"
							text=""
							url="pdfs/diploma-introduccion-php-2018.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Programación orientada a objetos"
							text=""
							url="pdfs/diploma-oop.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Frameworks PHP"
							text=""
							url="pdfs/diploma-php-frameworks.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Programación orientada a objetos con python"
							text=""
							url="pdfs/diploma-poo-python.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Prework con windows"
							text=""
							url="pdfs/diploma-prework-windows.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="SQL y MySQL"
							text=""
							url="pdfs/diploma-sql-mysql.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Terminal"
							text=""
							url="pdfs/diploma-terminal.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Complejidad algoritmica con python"
							text=""
							url="pdfs/diploma-algoritmos-python.pdf"
						/>
					</Grid>
					<Grid xs={3}>
						<MediaCard
							heading="Introduccion a java"
							text=""
							url="pdfs/diploma-java-basico.pdf"
						/>
					</Grid>
				</Grid>
			</Box>
			<CredlyLib/>
		</Container>
	);
}