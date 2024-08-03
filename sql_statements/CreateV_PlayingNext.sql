DROP VIEW IF EXISTS v_NextPlaying;
CREATE VIEW v_NextPlaying
(
Song,
Orquestra,
Artist, 
Genre
)
 
AS 
select  title , artist , album_artist, genre  from library where id=
(select track_id from PlaylistTracks where position = 1 and playlist_id = 1)