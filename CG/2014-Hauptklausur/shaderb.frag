vec2 determineTextureCoordinate(in vec3 S, in int index)
{
    vec2 UV;
    switch(index)
    {
        // Vervollständigen Sie die Fälle entsprechend der Aufgabenstellung
        case 0:
        case 1:
			UV = P.yz;
			break;
        case 2:
        case 3:
			UV = P.xy;
			break;
        case 4:
        case 5:
			UV = P.xz;
			break;
    }
    // Fügen Sie ggf. notwendige weitere Anweisungen hier ein
	UV = UV * .5 + .5;
    return UV;
}
