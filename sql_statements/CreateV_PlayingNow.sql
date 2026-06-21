DROP VIEW IF EXISTS v_NowPlaying;
CREATE VIEW v_NowPlaying
(
Song,
Orquestra,
Artist, 
Genre,
Year
)
 
AS 
select  title , artist , album_artist, genre, year  from library where id=
(select track_id from PlaylistTracks where id= 
(select max(id) from PlaylistTracks where playlist_id= 
(select max(id) from Playlists)));