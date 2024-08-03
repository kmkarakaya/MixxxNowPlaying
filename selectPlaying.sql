select 'TITLE: ' || title || ' '  || 'ORQUESTRA:' || artist || ' '  || 'CANTA: ' || album_artist  from library where id=
(select track_id from PlaylistTracks where id= 
(select max(id) from PlaylistTracks where playlist_id= 
(select max(id) from Playlists)))