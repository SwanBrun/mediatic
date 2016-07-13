package fr.iocean.application.resource.media;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Session;

public class MediaRepositoryImpl implements MediaRepositoryCustom {

	
	@PersistenceContext
	EntityManager em;

	protected Session getSession() {
		return em.unwrap(Session.class);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Media> search(String search) {

		return getSession().createQuery("from Media m where m.title LIKE :search or m.author LIKE :search or m.type LIKE :search ")
				.setParameter("search", "%" + search + "%").list();
		
	}
	

}
