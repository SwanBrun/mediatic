package fr.iocean.application.resource.media;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MediaService {

	@Autowired
	private MediaRepository mediaRepository;

	public Media findById(Long id) {
		return mediaRepository.findOne(id);
	}

	public List<Media> findAll() {
		return mediaRepository.findAll();
	};

	public void delete(Long id) {
		mediaRepository.delete(id);
	}

	public void save(Media media) {

		mediaRepository.save(media);

	}

	public List<Media> search(String search) {
		return mediaRepository.search(search);
	}

}
