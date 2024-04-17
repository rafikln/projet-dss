from flask import Flask, request, jsonify
import xml.etree.ElementTree as ET
from flask_cors import CORS
app = Flask("app")
CORS(app)
# Chemin vers le fichier XML
xml_file_path = "code.xml"

# Charger le fichier XML
tree = ET.parse(xml_file_path)
root = tree.getroot()


@app.route('/artist', methods=['GET'])
def get_artist():
    query = request.args.get('name')
    # Parcourir les artistes dans le fichier XML
    for artist in root.findall('artiste'):
        artist_name = artist.get('nom')
        # Vérifier si le nom de l'artiste correspond à la requête de recherche
        if query.lower() == artist_name.lower():
            artist_info = {}
            # Récupérer les informations sur l'artiste
            artist_info['nom'] = artist_name
            artist_info['ville'] = artist.get('ville')
            artist_info['biographie'] = artist.find('biographie').text
            artist_info['site'] = artist.find('site').get('url')

            # Ajouter les albums de l'artiste
            albums = []
            for album in root.findall('album'):
                if album.find('ref-artiste').get('ref') == artist.get('no'):
                    album_info = {}
                    album_info['annee'] = album.get('annee')
                    album_info['titre'] = album.find('titre').text
                    
                    # Ajouter les chansons de l'album
                    songs = []
                    for song in album.find('chansons').findall('chanson'):
                        songs.append(song.text)
                    
                    album_info['chansons'] = songs
                    albums.append(album_info)
            artist_info['albums'] = albums
            
            return jsonify(artist_info)
    return jsonify({'message': 'Artist not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
